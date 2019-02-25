import React from "react";

export default WrappedComponent =>
    class I18n extends React.Component {
        
        constructor(props) {
            super(props) ; 
            this.lan = 'en' ;
            this.translations = {
                en:{
                    header:{
                        headerMain:'Social Feed',
                        headerSettings:'Settings'
                    },
                    settings:{
                        numberPosts:'Number of posts', 
                        feedUrl:'Feed URL', 
                        updateInterval:'Update Interval (seconds)',
                        save:'SAVE',
                        setDefault:'SET DEFAULT'
                    },
                    main:{
                        loading:'Loading ...'
                    }
                }, 
                es:{
                    header:{
                        headerMain:'Feed Social',
                        headerSettings:'Ajustes'
                    },
                    settings:{
                        numberPosts:'Numero de publicaciones', 
                        feedUrl:'URL de Feed', 
                        updateInterval:'Intervalo de actualización (en segundos)',
                        save:'GUARDAR',
                        setDefault:'RESTAURAR'
                    },
                    main:{
                        loading:'Cargando ...'
                    }
                }
            }
        }
        setLanguage(lan){
            this.lan = lan  ;
        }
        t(namespace, key){
            return this.translations[this.lan][namespace][key] ;
        }
        render() {
            return <WrappedComponent setLanguage={this.setLanguage.bind(this)} t={this.t.bind(this)} {...this.props}/>;
        }
    };