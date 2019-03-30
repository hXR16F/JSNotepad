// Programmed by hXR16F
// hXR16F.ar@gmail.com

function OnStart()  
{  
    app.SetOrientation("Portrait");
    app.ShowProgress("Loading...");
    setTimeout("app.HideProgress()", 650);

    app.MakeFolder("/sdcard/Android/data/com.hxr16f.jsnotepad");
 
	lay = app.CreateLayout("linear", "VCenter,FillXY");  
	lay.SetBackColor("#ffffff");

	layBut3 = app.CreateLayout("Linear", "Horizontal"); 
	lay.AddChild(layBut3);

	spin = app.CreateSpinner("FG Color,#ffffff,#131313,#c0392b,#27ae60,#2980b9,#f1c40f", 0.33);
	spin.SetOnTouch(spin_OnTouch);
	spin.SetTextColor("#000000");
	layBut3.AddChild(spin);

	spin2 = app.CreateSpinner("FG Size,2,4,8,12,16,20,24,28,32,36,40,44,48,52,58,62,72,92,112,124,142,164,188,224,248,266,288,324,364", 0.33);
	spin2.SetOnTouch(spin2_OnTouch);
	spin2.SetTextColor("#000000");
	layBut3.AddChild(spin2);
	
	spin7 = app.CreateSpinner("BG Color,#ffffff,#131313,#c0392b,#27ae60,#2980b9,#f1c40f", 0.33);
	spin7.SetOnTouch(spin7_OnTouch);
	spin7.SetTextColor("#000000");
	layBut3.AddChild(spin7);

	edt = app.CreateTextEdit("",1 , 0.81); 
	edt.SetBackColor("#131313");
	edt.SetTextColor("#ffffff");
	edt.SetTextSize("24");
	lay.AddChild(edt); 
	 
	layBut = app.CreateLayout("Linear", "Horizontal"); 
	lay.AddChild(layBut); 

	spin3 = app.CreateSpinner("Save,/sdcard/Android/data/com.hxr16f.jsnotepad/text_file1.txt,/sdcard/Android/data/com.hxr16f.jsnotepad/text_file2.txt,/sdcard/Android/data/com.hxr16f.jsnotepad/text_file3.txt", 0.25);
	spin3.SetOnTouch(spin3_OnTouch);
	spin3.SetTextColor("#000000");
	layBut.AddChild(spin3);

	spin4 = app.CreateSpinner("Open,/sdcard/Android/data/com.hxr16f.jsnotepad/text_file1.txt,/sdcard/Android/data/com.hxr16f.jsnotepad/text_file2.txt,/sdcard/Android/data/com.hxr16f.jsnotepad/text_file3.txt", 0.25);
	spin4.SetOnTouch(spin4_OnTouch);
	spin4.SetTextColor("#000000");
	layBut.AddChild(spin4);

	spin5 = app.CreateSpinner("Share,/sdcard/Android/data/com.hxr16f.jsnotepad/text_file1.txt,/sdcard/Android/data/com.hxr16f.jsnotepad/text_file2.txt,/sdcard/Android/data/com.hxr16f.jsnotepad/text_file3.txt", 0.25);
	spin5.SetOnTouch(spin5_OnTouch);
	spin5.SetTextColor("#000000");
	layBut.AddChild(spin5);

	spin6 = app.CreateSpinner("Delete,/sdcard/Android/data/com.hxr16f.jsnotepad/text_file1.txt,/sdcard/Android/data/com.hxr16f.jsnotepad/text_file2.txt,/sdcard/Android/data/com.hxr16f.jsnotepad/text_file3.txt", 0.25);
	spin6.SetOnTouch(spin6_OnTouch);
	spin6.SetTextColor("#000000");
	layBut.AddChild(spin6);

	layBut2 = app.CreateLayout("Linear", "Horizontal"); 
	lay.AddChild(layBut2); 

	btnCopy = app.CreateButton("Copy", 0.2, 0.062, "Custom");
	btnCopy.SetOnTouch(btnCopy_OnTouch);
	btnCopy.SetStyle("#ffffff", "#ffffff", 2);
	btnCopy.SetTextColor("#000000");
	layBut2.AddChild(btnCopy)

	btnClear = app.CreateButton("Clear", 0.2, 0.062, "Custom");
	btnClear.SetOnTouch(btnClear_OnTouch);
	btnClear.SetStyle("#ffffff", "#ffffff", 2);
	btnClear.SetTextColor("#000000");
	layBut2.AddChild(btnClear);

	btnSpeak = app.CreateButton("Speak", 0.2, 0.062, "Custom");
	btnSpeak.SetOnTouch(btnSpeak_OnTouch);
	btnSpeak.SetStyle("#ffffff", "#ffffff", 2);
	btnSpeak.SetTextColor("#000000");
	layBut2.AddChild(btnSpeak);

	btnAlert = app.CreateButton("Alert", 0.2, 0.062, "Custom");
	btnAlert.SetOnTouch(btnAlert_OnTouch);
	btnAlert.SetStyle("#ffffff", "#ffffff", 2);
	btnAlert.SetTextColor("#000000");
	layBut2.AddChild(btnAlert);

	btnVersion = app.CreateButton("About", 0.2, 0.062, "Custom");
	btnVersion.SetOnTouch(btnVersion_OnTouch);
	btnVersion.SetStyle("#ffffff", "#ffffff", 2);
	btnVersion.SetTextColor("#000000");
	layBut2.AddChild(btnVersion);
	  
	app.AddLayout(lay); 

    app.EnableBackKey(false);
}

function OnBack() 
{
  var yesNo = app.CreateYesNoDialog("Exit app?");
  yesNo.SetOnTouch(yesNo_OnTouch);
}

function yesNo_OnTouch(result)
{
  if(result=="Yes") app.Exit();
}  

function btnShare_OnTouch()
{
	var zaw = app.ReadFile(" /sdcard/Android/data/com.hxr16f.jsnotepad/text_file.txt");
	app.SendMail("", "", zaw);
}

function btnClear_OnTouch()  
{
    edt.SetText("");
    app.ShowPopup("Cleared!");
}  
 
function btnCopy_OnTouch()  
{
	var txt = edt.GetText();
    app.SetClipboardText(txt);
    app.ShowPopup("Copied!");
}

function btnVersion_OnTouch()  
{
    app.ShowPopup("Programmed by hXR16F\nhXR16F.ar@gmail.com");
}

function spin_OnTouch(item)
{
	edt.SetTextColor(item);
}

function spin2_OnTouch(item2)
{
	edt.SetTextSize(item2);
}

function spin7_OnTouch(item7)
{
	edt.SetBackColor(item7);
}

function spin3_OnTouch(item3)
{
    var txt = edt.GetText();
	app.WriteFile(item3,txt);
    app.ShowPopup("Saved!");
}

function spin4_OnTouch(item4)
{
	var txt = app.ReadFile(item4);
	edt.SetText(txt);
	app.ShowPopup("Loaded!");
}

function spin5_OnTouch(item5)
{
	var zaw = app.ReadFile(item5);
	app.SendMail("", "", zaw);
}

function spin6_OnTouch(item6)
{
    var txt = app.DeleteFile(item6);
    app.ShowPopup("Deleted");
}
 
function btnSpeak_OnTouch()  
{
	var pitch = 1.0, speed = 1.0;
	app.TextToSpeech(edt.GetText(), pitch, speed);
}

function btnAlert_OnTouch()  
{
	app.Alert(edt.GetText(), "Alert");
}