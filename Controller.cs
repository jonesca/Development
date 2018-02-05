        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult EmpInfoSearch(string lastname,
            string firstname,
            string employeeid,
            string userid,
            string dept)
        {
            ViewBag.Limit = 50; //if this number is changed the number in the query just below must also be changed to match
            var lname = lastname;
            var fname = firstname;
            var emplid = employeeid;
            var uid = userid;
            var ccid = dept;

            var employees = new List<EmployeeInformation>();

            using (var connection = new SqlConnection(ConfigurationManager.ConnectionStrings["db"].ConnectionString))
            {
                connection.Open();

                var sql = @"SELECT TOP 50 a.LastName,
                            a.FirstName,
                            a.Email,
                            a.PrimaryPhone,
                            a.CellularPhone,
                            a.EmployeeID,
                            a.UserID,
                            (SELECT Dept_NM from hr.dbo.v_Department where Dept_ID = a.DepartmentID) as 'Department',
                            a.CompanyID,
                            a.BusinessUnitID,
                            a.CostCenterID,
                            a.MailStopID,
                            (SELECT b.FullName from hr.dbo.v_ActivePersonMasterExt b WHERE b.PersonID = a.MangerPersonID) as 'Manager'
                              FROM hr.dbo.v_ActivePersonMasterExt a
                            Where a.Lastname LIKE @lastname
                            And a.FirstName Like @firstname
                            And a.EmployeeID LIKE @employeeid
                            And a.UserID Like @userid
                            And a.CostCenterID Like @ccid
                            Order by a.Lastname asc, a.firstname asc";

                var cmd = new SqlCommand(sql, connection);
                cmd.Parameters.AddWithValue("@lastname", lname);
                cmd.Parameters.AddWithValue("@firstname", fname);
                cmd.Parameters.AddWithValue("@employeeid", emplid);
                cmd.Parameters.AddWithValue("@userid", uid);
                cmd.Parameters.AddWithValue("@ccid", dept);

                //cmd.Parameters.AddWithValue("@Limit", ViewBag.Limit);

                var reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    employees.Add(new EmployeeInformation
                    {
                        Lastname = reader[0].ToString(),
                        Firstname= reader[1].ToString(),
                        Email = reader[2].ToString(),
                        Phone = reader[3].ToString(),
                        Mobile = reader[4].ToString(),
                        Employeeid = reader[5].ToString(),
                        Userid = reader[6].ToString(),
                        Dept = reader[7].ToString(),
                        Company = reader[8].ToString(),
                        BusinessUnit = reader[9].ToString(),
                        CostCenter = reader[10].ToString(),
                        MailStop = reader[11].ToString(),
                        Manager = reader[12].ToString(),
                    });
                }
                reader.Close();
            }
            return PartialView("_EmployeeResults", employees);
        }
