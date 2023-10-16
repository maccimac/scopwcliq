<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class NotificationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('notifications')->insert([
            // $table->integer('project_id');
            // $table->integer('milestone_id');
            // $table->integer('deliverable_id');
            // $table->text('type'); 
            //     /***
            //      * STATUS_UPDATE : COMPLETE, INCOMPLETE, CANCEL,
            //      * ITEM_CHANGE : SENT, APPROVED, REJECTED,
            //      * INVOICE: SENT, PAID, VOID
            //     ***/
            // $table->text('context');
            // $table->text('additional_message');
            [
                'project_id' => 2,
                'milestone_id' => 3,
                'deliverable_id' => 7,
                'type' => 'STATUS_UPDATE',
                'status' => 'COMPLETE',
                'description' => 'Market, competition, and demography research',
                'additional_message' => 'This is done, thanks for your help.',
                'created_at' => Carbon::yesterday()  
            ],
        ]);    
    }
}
