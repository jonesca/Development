using System;
using System.Collections;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Web;
using System.Web.SessionState;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Data.SqlClient;

namespace EmployeeLookUp
{
	/// <summary>
	/// Summary description for _default.
	/// </summary>
	public class _default : System.Web.UI.Page
	{
		#region Web Form Designer generated code
		override protected void OnInit(EventArgs e)
		{
			//
			// CODEGEN: This call is required by the ASP.NET Web Form Designer.
			//
			InitializeComponent();
			base.OnInit(e);
		}
		
		/// <summary>
		/// Required method for Designer support - do not modify
		/// the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{    
			this.Load += new System.EventHandler(this.Page_Load);

		}
		#endregion

		protected System.Web.UI.WebControls.TextBox txtBadgeNo;
		protected System.Web.UI.WebControls.TextBox txtEmpNo;
		protected System.Web.UI.WebControls.TextBox txtPersonId;
		protected System.Web.UI.WebControls.TextBox txtFirstNm;
		protected System.Web.UI.WebControls.Button btnSearch;
		protected System.Web.UI.WebControls.Repeater rptEmpData;
		protected System.Web.UI.WebControls.TextBox txtLastNm;
		protected System.Web.UI.WebControls.TextBox txtUserId;
		protected System.Web.UI.WebControls.TextBox txtDept;
	
		private void Page_Load(object sender, System.EventArgs e)
		{
			string sql = "";

			if(txtEmpNo.Text != string.Empty)
				sql = "SELECT A.LAST_NAME + ', ' +  A.PreferredName AS Name, A.EMPLID, B.BADGE, A.UserName, A.Person_Id, "
					+ "A.CO_CD, A.COMPANY_DESC, A.LOCATION, A.BUSINESS_UNIT_DESC, A.FIN_DEPT_NBR, A.HR_DEPT_ID, "
					+ "A.HR_DEPT_DESC, A.WORK_PHONE, A.PAGER_PHONE, A.EMAIL_ID, A.MAIL_STA, A.MGR_NAME FROM "
					+ "CorpPeopleTbl A LEFT OUTER JOIN tblPeople B ON A.Person_Id = B.Person_ID WHERE "
					+ "A.EMPLID = '" + txtEmpNo.Text + "' ORDER BY A.LAST_NAME, A.PreferredName";
			else if(txtBadgeNo.Text != string.Empty)
				sql = "SELECT A.LAST_NAME + ', ' +  A.PreferredName AS Name, A.EMPLID, B.BADGE, A.UserName, A.Person_Id, "
					+ "A.CO_CD, A.COMPANY_DESC, A.LOCATION, A.BUSINESS_UNIT_DESC, A.FIN_DEPT_NBR, A.HR_DEPT_ID, "
					+ "A.HR_DEPT_DESC, A.WORK_PHONE, A.PAGER_PHONE, A.EMAIL_ID, A.MAIL_STA, A.MGR_NAME FROM "
					+ "CorpPeopleTbl A LEFT OUTER JOIN tblPeople B ON A.Person_Id = B.Person_ID WHERE "
					+ "B.BADGE = '" + txtBadgeNo.Text + "' ORDER BY A.LAST_NAME, A.PreferredName";
			else if(txtPersonId.Text != string.Empty)
				sql = "SELECT A.LAST_NAME + ', ' +  A.PreferredName AS Name, A.EMPLID, B.BADGE, A.UserName, A.Person_Id, "
					+ "A.CO_CD, A.COMPANY_DESC, A.LOCATION, A.BUSINESS_UNIT_DESC, A.FIN_DEPT_NBR, A.HR_DEPT_ID, "
					+ "A.HR_DEPT_DESC, A.WORK_PHONE, A.PAGER_PHONE, A.EMAIL_ID, A.MAIL_STA, A.MGR_NAME FROM "
					+ "CorpPeopleTbl A LEFT OUTER JOIN tblPeople B ON A.Person_Id = B.Person_ID WHERE "
					+ "B.Person_ID = '" + txtPersonId.Text + "' ORDER BY A.LAST_NAME, A.PreferredName";				
			else if(txtUserId.Text != string.Empty)
				sql = "SELECT A.LAST_NAME + ', ' +  A.PreferredName AS Name, A.EMPLID, B.BADGE, A.UserName, A.Person_Id, "
					+ "A.CO_CD, A.COMPANY_DESC, A.LOCATION, A.BUSINESS_UNIT_DESC, A.FIN_DEPT_NBR, A.HR_DEPT_ID, "
					+ "A.HR_DEPT_DESC, A.WORK_PHONE, A.PAGER_PHONE, A.EMAIL_ID, A.MAIL_STA, A.MGR_NAME FROM "
					+ "CorpPeopleTbl A LEFT OUTER JOIN tblPeople B ON A.Person_Id = B.Person_ID WHERE "
					+ "A.UserName = '" + txtUserId.Text + "' ORDER BY A.LAST_NAME, A.PreferredName";
			else if(txtDept.Text != string.Empty)
				sql = "SELECT A.LAST_NAME + ', ' +  A.PreferredName AS Name, A.EMPLID, B.BADGE, A.UserName, A.Person_Id, "
					+ "A.CO_CD, A.COMPANY_DESC, A.LOCATION, A.BUSINESS_UNIT_DESC, A.FIN_DEPT_NBR, A.HR_DEPT_ID, "
					+ "A.HR_DEPT_DESC, A.WORK_PHONE, A.PAGER_PHONE, A.EMAIL_ID, A.MAIL_STA, A.MGR_NAME FROM "
					+ "CorpPeopleTbl A LEFT OUTER JOIN tblPeople B ON A.Person_Id = B.Person_ID WHERE "
					+ "A.FIN_DEPT_NBR = '" + txtDept.Text + "' ORDER BY A.LAST_NAME, A.PreferredName";
			else if(txtLastNm.Text != string.Empty && txtFirstNm.Text != string.Empty)
				sql = "SELECT A.LAST_NAME + ', ' +  A.PreferredName AS Name, A.EMPLID, B.BADGE, A.UserName, A.Person_Id, "
					+ "A.CO_CD, A.COMPANY_DESC, A.LOCATION, A.BUSINESS_UNIT_DESC, A.FIN_DEPT_NBR, A.HR_DEPT_ID, "
					+ "A.HR_DEPT_DESC, A.WORK_PHONE, A.PAGER_PHONE, A.EMAIL_ID, A.MAIL_STA, A.MGR_NAME FROM "
					+ "CorpPeopleTbl A LEFT OUTER JOIN tblPeople B ON A.Person_Id = B.Person_ID WHERE "
					+ "A.LAST_NAME LIKE '" + txtLastNm.Text.Replace("'", "''") + "%' AND A.FIRST_NAME LIKE '" + txtFirstNm.Text + "%' ORDER BY A.LAST_NAME, A.PreferredName";
			else if(txtLastNm.Text != string.Empty && txtFirstNm.Text == string.Empty)
				sql = "SELECT A.LAST_NAME + ', ' +  A.PreferredName AS Name, A.EMPLID, B.BADGE, A.UserName, A.Person_Id, "
					+ "A.CO_CD, A.COMPANY_DESC, A.LOCATION, A.BUSINESS_UNIT_DESC, A.FIN_DEPT_NBR, A.HR_DEPT_ID, "
					+ "A.HR_DEPT_DESC, A.WORK_PHONE, A.PAGER_PHONE, A.EMAIL_ID, A.MAIL_STA, A.MGR_NAME FROM "
					+ "CorpPeopleTbl A LEFT OUTER JOIN tblPeople B ON A.Person_Id = B.Person_ID WHERE "
					+ "A.LAST_NAME LIKE '" + txtLastNm.Text.Replace("'", "''") + "%' ORDER BY A.LAST_NAME, A.PreferredName";
			else if(txtLastNm.Text == string.Empty && txtFirstNm.Text != string.Empty)
				sql = "SELECT A.LAST_NAME + ', ' +  A.PreferredName AS Name, A.EMPLID, B.BADGE, A.UserName, A.Person_Id, "
					+ "A.CO_CD, A.COMPANY_DESC, A.LOCATION, A.BUSINESS_UNIT_DESC, A.FIN_DEPT_NBR, A.HR_DEPT_ID, "
					+ "A.HR_DEPT_DESC, A.WORK_PHONE, A.PAGER_PHONE, A.EMAIL_ID, A.MAIL_STA, A.MGR_NAME FROM "
					+ "CorpPeopleTbl A LEFT OUTER JOIN tblPeople B ON A.Person_Id = B.Person_ID WHERE "
					+ "A.FIRST_NAME LIKE '" + txtFirstNm.Text.Replace("'", "''") + "%' ORDER BY A.LAST_NAME, A.PreferredName";

			if(sql != string.Empty) 
			{
				SqlConnection cn = new SqlConnection(System.Configuration.ConfigurationSettings.AppSettings["ConnectionString"]);
				cn.Open();
				SqlDataAdapter da = new SqlDataAdapter(sql, cn);
				DataTable dt = new DataTable();
				da.Fill(dt);
				da.Dispose();
				cn.Close();
				cn.Dispose();
			
				ClearForm();
				rptEmpData.DataSource = dt;
				rptEmpData.DataBind();
			}
		}
		
		private void ClearForm() 
		{
			txtEmpNo.Text = "";
			txtBadgeNo.Text = "";
			txtUserId.Text = "";
			txtDept.Text = "";
			txtLastNm.Text = "";
			txtFirstNm.Text = "";
		}
	}
}