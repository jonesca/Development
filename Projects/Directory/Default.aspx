<%@ Page language="c#" Codebehind="default.aspx.cs" AutoEventWireup="false" Inherits="EmployeeLookUp._default" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" >
<HTML>
	<HEAD>
		<title>default</title>
		<meta content="Microsoft Visual Studio .NET 7.1" name="GENERATOR">
		<meta content="C#" name="CODE_LANGUAGE">
		<meta content="JavaScript" name="vs_defaultClientScript">
		<meta content="http://schemas.microsoft.com/intellisense/ie5" name="vs_targetSchema">
		<LINK href="stylesheet.css" type="text/css" rel="stylesheet">
		<script language="javascript">
			function ShowData(obj1, obj2, empNo, badgeNo, userId, personId, companyCode, company, location, 
				business, finDept, hrDept, dept, phone, pager, email, ms, mgr) {
				if(obj1.src.search("plus.gif") != -1) {
					obj1.src = "images/minus.gif";
					obj2.innerHTML = "<table style=\"FONT-SIZE: 8pt; FONT-FAMILY: Arial\"><tr bgColor=\"#ffffff\""
						+ "><td width=\"50\" height=\"1\"><IMG height=\"1\" src=\"images/spacer.gif\" width=\""
						+ "50\" border=\"0\"></td><td width=\"70\" height=\"1\"><IMG height=\"8\" src=\"images/"
						+ "spacer.gif\" width=\"70\" border=\"0\"></td><td width=\"50\" height=\"1\"><IMG height"
						+ "=\"1\" src=\"images/spacer.gif\" width=\"50\" border=\"0\"></td><td width=\"70\" height"
						+ "=\"1\"><img src=\"images/spacer.gif\" width=\"70\" height=\"1\" border=\"0\"></td>"
						+ "<td width=\"50\" height=\"1\"><IMG height=\"1\" src=\"images/spacer.gif\" width=\"50\" "
						+ "border=\"0\"></td><td width=\"70\" height=\"1\"><IMG height=\"1\" src=\"images/spacer"
						+ ".gif\" width=\"70\" border=\"0\"></td><td width=\"50\" height=\"1\"><img src=\"images"
						+ "/spacer.gif\" width=\"50\" height=\"1\" border=\"0\"></td><td width=\"50\" height=\"1\""
						+ "><IMG height=\"1\" src=\"images/spacer.gif\" width=\"50\" border=\"0\"></td></tr><tr>"
						+ "<td align=\"right\"><b>Emp No:</b> </td><td>" + empNo + "</td><td align=\"right\"><b>"
						+ "Badge No:</b> </td><td>" + badgeNo + "</td><td align=\"right\"><b>User ID:</b> </td>"
						+ "<td>" + userId + "</td><td align=\"right\"><b>Person ID:</b> </td><td>" + personId 
						+ "</td></tr><tr><td align=\"right\"><b>Company:</b> </td><td colspan=\"3\">(" 
						+ companyCode + ") " + company + " </td><td align=\"right\"><b>Location:</b></td><td "
						+ "colspan=\"3\">(" + location + ") " + business + "</td></tr><tr><td align=\"right\">"
						+ "<b>Dept:</b></td><td colspan=\"7\">(" + finDept + " / " + hrDept + ") " + dept 
						+ "</td></tr><tr><td align=\"right\"><b>Phone:</b></td><td colspan=\"3\">" + phone 
						+ "</td><td align=\"right\"><b>Pager:</td><td colspan=\"3\">" + pager + "</td></tr><tr>"
						+ "<td align=\"right\"><b>Email:</b></td><td colspan=\"3\">" + email + "</td><td align=\""
						+ "right\"><b>M/S:</b></td><td colspan=\"3\">" + ms + "</td></tr><tr><td align=\"right\" "
						+ "colspan=\"2\"><b>Manager Name:</b></td><td colspan=\"6\">" + mgr + "</td></tr><tr><td colspan=\"8\">&nbsp;</td></tr></table>";
				}
				else {
					obj1.src = "images/plus.gif";
					obj2.innerHTML = "";
				}
			}
		</script>
	</HEAD>
	<body MS_POSITIONING="FlowLayout">
		<form id="Form1" method="post" runat="server">
			<table cellSpacing="0" cellPadding="0" width="700" border="0">
				<tr>
					<td colSpan="2">
						<IMG height="138" alt="" src="images/header_r1_c1.jpg" width="654" border="0" name="header_r1_c1">
					</td>
				</tr>
				<tr valign="top">
					<!--
					<td vAlign="top" width="162">
						<IMG height="132" alt="" src="images/header_r2_c1.jpg" width="162" border="0" name="header_r2_c1">
					</td>
					-->
					<td width="75px">&nbsp;</td>
					<td vAlign="top" width="538">
						<IMG height="25" alt="" src="images/header_r2_c2.jpg" width="492" border="0" name="header_r2_c2">
						<br />
						<table width="100%" border="0">
							<tr>
								<td colspan="2">
									<table border="0">
										<tr>
											<td rowspan="5">
												<img src="images/spacer.gif" width="38" height="10">
											</td>
											<td colspan="2">
												&nbsp;											
											</td>
											<td rowspan="3">
												<img src="images/spacer.gif" width="10" height="10">
											</td>
											<td colspan="2">
												&nbsp;
											</td>
											<td rowspan="3">
												<img src="images/spacer.gif" width="10" height="10">
											</td>
											<td colspan="2">
												&nbsp;
											</td>																				
										</tr>
										<tr>
											<!-- -->
											<td class="headlines" vAlign="top" align="right">Employee ID:</td>
											<td><asp:textbox id="txtEmpNo" runat="server" Width="64px"></asp:textbox></td>
											<!-- -->
											<td class="headlines" vAlign="top" align="right">Badge Number:</td>
											<td><asp:textbox id="txtBadgeNo" runat="server" Width="64px"></asp:textbox></td>
											<!-- -->
											<td class="headlines" valign="top" align="right">Person ID:</td>
											<td><asp:textbox id="txtPersonId" runat="server" Width="64px"></asp:textbox></td>
										</tr>
										<tr>
											<!-- -->
											<td class="headlines" vAlign="top" align="right">User ID:
											</td>
											<td><asp:textbox id="txtUserId" runat="server" Width="64px"></asp:textbox></td>
											<!-- -->
											<td class="headlines" vAlign="top" align="right">Dept:
											</td>
											<td><asp:textbox id="txtDept" runat="server" Width="64px"></asp:textbox></td>
											<!-- -->
											<td colspan="2">&nbsp;</td>
										</tr>
										<tr>
											<td colspan="9">&nbsp;</td>
										</tr>
										<tr>
											<!-- -->
											<td class="headlines" valign="top" align="right" colspan="2">First/Last Name:</td>
											<td colspan="6"><asp:textbox id="txtFirstNm" runat="server" Width="155px"></asp:textbox>
											&nbsp;
											<asp:textbox id="txtLastNm" runat="server" Width="156px"></asp:textbox></td>
											<!-- 
											<td colspan="2">&nbsp;</td>
											-->
										</tr>
										<tr>
											<!-- -->
											<td colspan="2">&nbsp;</td>
											<!-- -->
											<td colspan="2">&nbsp;</td>
											<!-- -->
											<td colspan="2">&nbsp;</td>
											<!-- -->
											<td colspan="2">&nbsp;</td>
										</tr>	
										<tr>
											<td align="center" colspan="9">
												<asp:button id="btnSearch" runat="server" Text="Search"></asp:button>
											</td>
										</tr>																			
									</table>
								</td>
							</tr>
							<tr>
								<td colSpan="2">&nbsp;</td>
							</tr>
							<tr>
								<td colSpan="2">
									<asp:Repeater id="rptEmpData" runat="server">
										<ItemTemplate>
											<table style="FONT-SIZE: 10pt; FONT-FAMILY: Arial">
												<tr>
													<td valign="top">
														<img src="images/plus.gif" height="13" width="13" 
														onclick="ShowData(this, 
														td<%# DataBinder.Eval(Container.DataItem, "EmplId")%>, 
														'<%# DataBinder.Eval(Container.DataItem, "EmplId")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "Badge")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "UserName")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "Person_Id")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "Co_Cd")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "Company_Desc")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "Location")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "Business_Unit_Desc")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "Fin_Dept_Nbr")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "HR_Dept_Id")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "HR_Dept_Desc")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "Work_Phone")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "Pager_Phone")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "Email_Id").ToString().Replace("'", "\\'")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "Mail_Sta")%>', 
														'<%# DataBinder.Eval(Container.DataItem, "Mgr_Name").ToString().Replace("'", "\\'")%>');">
													</td>
													<td><%#DataBinder.Eval(Container.DataItem, "Name")%></td>
													
												</tr>
												<tr>
													<td></td>
													<td class="headlines" id="td<%# DataBinder.Eval(Container.DataItem, "EmplId")%>"></td>
												</tr>
											</table>											
										</ItemTemplate>										
									</asp:Repeater>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</form>
	</body>
</HTML>
