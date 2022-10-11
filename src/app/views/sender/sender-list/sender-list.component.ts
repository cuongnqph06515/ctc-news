import { Component, OnInit } from '@angular/core'
import { Sender } from "src/app/model/sender.model";
import { SenderService } from "src/app/service/sender.service";
@Component({
    selector: 'app-sender-list',
    templateUrl: './sender-list.component.html',
    styles: [`
        table{
            width: 100%;
        }
    `]
})
export class SenderListComponent implements OnInit {

    displayedColumns: string[] = ['id', 'sender_name', 'contact_name', 'phone', 'postal_code', 'fax', 'actions'];
    senderArray: Sender[] = [];

    constructor(private senderService: SenderService) { }

    ngOnInit(): void {
        this.getAllSender();
    }

    //get sender list
    getAllSender() {
        this.senderService.getAllSender().subscribe({
            next: (response) => {
                this.senderArray = response.data;
            },
            error: (err) => {
                console.log(err);
            }
        });
    }
}