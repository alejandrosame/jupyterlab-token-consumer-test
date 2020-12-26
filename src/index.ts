import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IFoo } from "provider-test";

/**
 * Initialization data for the consumer-test extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'consumer-test',
  autoStart: true,
  requires: [IFoo],
  activate: (app: JupyterFrontEnd, token: IFoo) => {
    console.log('JupyterLab extension consumer-test is activated!');
    console.log('Token read', token);
  }
};

export default extension;
