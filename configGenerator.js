module.exports = url => {
    let config = { devtools_port: 9090,
        startup_app: 
         { name: 'OpenFin Symphony Client',
           description: 'Experimental client for Symphony - running OpenFin',
           url,
           uuid: 'OpenFin-Symphony-udbrf2z9sehilik9',
           autoShow: true,
           defaultCentered: true,
           frame: true,
           defaultHeight: 600,
           defaultWidth: 800,
           preload: 'https://openfin.github.io/symphony-of/bundle/bundle.js',
           frameConnect: 'all' },
        runtime: { arguments: '--noerrdialogs', version: '8.56.25.1' },
        shortcut: 
         { company: 'OpenFin',
           description: 'Experimental client for Symphony - running OpenFin',
           name: 'Symphony OpenFin',
           icon: 'https://openfin.github.io/symphony-of/symphony-symbol.png' },
        appAssets: 
         [ { src: 'https://openfin.github.io/symphony-of/OF-ScreenSnippet.zip',
             version: '4.6.0',
             alias: 'ScreenSnippet',
             target: 'OF-ScreenSnippet/ScreenSnippet.exe' } ] 
    }

    return config
}