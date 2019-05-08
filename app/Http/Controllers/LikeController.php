<?php

namespace App\Http\Controllers;

use App\Model\Like;
use Illuminate\Http\Request;


use App\Events\LikeEvent;
use App\Model\Reply;
use Auth;


class LikeController extends Controller
{
    public function __construct()
    {
        $this->middleware('JWT');
    }

    public function likeIt(Reply $reply){
       
        $reply->like()->create([
            'user_id' => 1

            // 'user_id' => auth()->id()
        ]);

        // broadcast(new LikeEvent($reply->id,1))->toOthers();
    }

    
    public function unlikeIt(Reply $reply){

        $reply->like()->where('user_id', '1')->first()->delete();

        //
        // $reply->like()->where('user_id', auth()->id())->first()->delete();

        // broadcast(new LikeEvent($reply->id,0))->toOthers();
    }
}
