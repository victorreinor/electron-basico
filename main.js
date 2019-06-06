const electron 	    = require('electron')
const url 		 	    = require('url')
const path		 	    = require('path')
const {app, dialog, Menu} = electron;

let win

app.on('ready', function() {
	win = new electron.BrowserWindow({
		width: 500,
		height: 350
	});

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:'
	}))

  // dialog.showMessageBox(win, {
  //   type: 'none',
  //   message: 'Hello from dialog',
  //   title: 'SON',
  //   buttons: []
  // });

  // dialog.showOpenDialog(win, {
  //   title: 'Select a new file from Electron',
  //   buttonLabel: 'SON'
  // })

  // dialog.showErrorBox('Title Error', 'Content')

  // dialog.showSaveDialog(win, {
  //   title: 'Save dialog',
  //   buttonLabel: 'Save Here'
  // })

  let menuTemplate = [{
    label: 'Menu 1',
  },{
    label: 'Menu 2',
    submenu: [{
      label: 'Hello',
      click: function(item, win, event) {
        dialog.showMessageBox(win, {
          type: 'none',
          message: 'HIII THIS IS SO N MENUUUUU',
          title: 'SON',
          buttons: []
        });
      }
    }]
  }];

  // const menu = Menu.buildFromTemplate(menuTemplate)
  // Menu.setApplicationMenu(menu)
});

// app.on('before-quit', function() {
//   console.log('bye bye app');
// })
