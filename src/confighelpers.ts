const path = require('path');

export class EnvironmentManager {
    private mode: string;
    private isDev: boolean;
    private isStage: boolean;
    private publicPathDev: string = '../dist/public';
    private publicPathProd: string = './public';

    constructor(environment) {
        let environmentIsString = typeof environment === 'string';
        let environmentLowercase = environmentIsString ? environment.toLowerCase() : null;

        if(!environmentIsString) {
            this.mode = 'development';
            return;
        } else if (environmentLowercase === '') {
            this.mode = 'development';
        } else {
            this.mode = environmentLowercase
        }
    }

    getViewsPath() : string {
        if (this.mode === 'development') {
            return 'dist/public';
        }
        else {
            return 'prod/public';
        }
    }

    getStaticPath() : string {
        if (this.mode === 'development') {
            return './dist/public/';
        }
        else {
            return './prod/public/';
        }
    }

    getIndexPath() : string {
        if (this.mode === 'development') {
            return '../../dist/public/index';
        }
        else {
            return '../../prod/public/index';
        }
    }

    getPort() : number {
        if(this.mode === 'production') {
            return 80;
        } else {
            return 8000;
        }
    }
}