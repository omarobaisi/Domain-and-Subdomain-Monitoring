<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class APIController extends Controller
{
    public function view($id = null){
        $url = "https://crt.sh/?q={$id}&output=json";
        $res = file_get_contents($url);
        $data = json_decode($res);
        return $res;
    }
}
