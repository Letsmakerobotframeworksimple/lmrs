example = {
	
	'Add Time To Date' : [["Variable/Keyword","Variable/Keyword", "Value", "Value"], ["${date} =", "Add Time To Date", "2014-05-28 12:05:03.111", "7 days"], ["Should Be Equal",	"${date}",	"2014-06-04 12:05:03.111"], ["${date} =	", "Add Time To Date",	"2014-05-28 12:05:03.111",	"01:02:03:004"], ["Should Be Equal",	"${date}",	"2014-05-28 13:07:06.115"]],
	
	'Add Time To Time' : [["Variable/Keyword","Variable/Keyword", "Value", "Value", "Optional Parameter", "Optional Parameter"], ["${time} =	", "Add Time To Time",	"1 minute",	"42"], ["Should Be Equal",	"${time}",	"${102}"], ["${time} =", "Add Time To Time",	"3 hours 5 minutes	01:02:03",	"timer","exclude_millis=yes"], ["Should Be Equal",	"${time}",	"04:07:03"]],
	
	'Append To List' : [["Keyword","Variable", "Value", "Value optional", "Value optional"], ["Append To List",	"${L1}",	"xxx"], ["Append To List",	"${L2}",	"x",	"y",	"z"]],
	
	'Call Method' : [["Variable/Keyword","Variable/Keyword", "variable/Value", "Value", "Value"], ["Call Method",	"${hashtable}",	"put",	"myname",	"myvalue"], ["${isempty} =",	"Call Method",	"${hashtable}",	"isEmpty"], ["Should Not Be True",	"${isempty}"], ["${value} =",	"Call Method",	"${hashtable}",	"get",	"myname"], ["Should Be Equal",	"${value}",	"myvalue"], ["Call Method",	"${object}",	"kwargs",	"name=value",	"foo=bar"], ["Call Method",	"${object}",	"positional",	"escaped=equals"]],
	
	'Catenate' : [["Variable","Keyword", "Separator/Value", "Value", "Value"], ["${str1} =",	"Catenate",	"Hello",	"world"], ["${str2} =",	"Catenate","SEPARATOR=---",	"Hello",	"world"], ["${str3} =",	"Catenate",	"SEPARATOR=",	"Hello",	"world"]],
	
	'Convert Date' : [["Variable/Keyword","Variable/Keyword", "Value", "Optional Parameter", "Optional Parameter"], ["${date} =",	"Convert Date",	"20140528 12:05:03.111"], ["Should Be Equal",	"${date}",	"2014-05-28 12:05:03.111"], ["${date} =",	"Convert Date",	"${date}",	"epoch"], ["Should Be Equal",	"${date}",	"${1401267903.111}"], ["${date} =",	"Convert Date",	"5.28.2014 12:05",	"exclude_millis=yes",	"date_format=%m.%d.%Y %H:%M"], ["Should Be Equal",	"${date}",	"2014-05-28 12:05:00"]],
	
	'Convert Time' : [["Variable/Keyword","Variable/Keyword", "Value", "Optional Parameter", "Optional Parameter"], ["${time} =",	"Convert Time",	"10 seconds"], ["Should Be Equal",	"${time}",	"${10}"], ["${time} =",	"Convert Time",	"1:00:01",	"verbose"], ["Should Be Equal",	"${time}",	"1 hour 1 second"], ["${time} =",	"Convert Time",	"${3661.5}",	"timer",	"exclude_milles=yes"], ["Should Be Equal",	"${time}",	"01:01:02"]],
	
	'Get Current Date' : [["Variable/Keyword","Variable/Keyword", "Value", "Optional Parameter"], ["${date} =",	"Get Current Date"] ,["Should Be Equal",	"${date}",	"2014-06-12 20:00:58.946"], ["${date} =",	"Get Current Date",	"UTC"], ["Should Be Equal",	"${date}",	"2014-06-12 17:00:58.946"], ["${date} =",	"Get Current Date",	"increment=02:30:00"], ["Should Be Equal",	"${date}",	"2014-06-12 22:30:58.946"], ["${date} =",	"Get Current Date",	"UTC	- 5 hours"], ["Should Be Equal",	"${date}",	"2014-06-12 12:00:58.946"], ["${date} =",	"Get Current Date",	"result_format=datetime"], ["Should Be Equal",	"${date.year}",	"${2014}"],	["Should Be Equal",	"${date.month}",	"${6}"]],
	
	'Click Element' : [["Keyword","Xpath"], ["Click Element", '//*[@id="myInput"]']],
	
	'Combine Lists' : [["Variable","Keyword", "Variable", "Variable", "Variable"], ["${x} =",	"Combine Lists",	"${L1}",	"${L2}"], ["${y} =",	"Combine Lists",	"${L1}",	"${L2}",	"${L1}"]],
	
	'Comment' : [["Keyword","Xpath","Parameter"], ["Wait Until Page Contains element", '//*[@id="myInput"]', "30s"], ["Wait Until Page Contains element", '//*[@id="myInput"]', " "]],
	
	'Wait Until Page Contains element' : [["Keyword","Xpath","Parameter"], ["Wait Until Page Contains element", '//*[@id="myInput"]', "30s"], ["Wait Until Page Contains element", '//*[@id="myInput"]', " "]],
	
	
}