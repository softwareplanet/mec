//
//  SwipeEnableViewController.swift
//  App
//
//  Created by Ihor Molchan on 04.04.2022.
//

import UIKit
import Capacitor

class SwipeEnableViewController: CAPBridgeViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        self.webView?.allowsBackForwardNavigationGestures = true
        // Do any additional setup after loading the view.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
