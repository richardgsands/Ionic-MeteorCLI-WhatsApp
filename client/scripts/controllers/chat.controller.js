import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats, Messages } from '/lib/collections';

export default class ChatCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.chatId = this.$stateParams.chatId;

        this.helpers({
            messages() {
                return Messages.find({ chatId: this.chatId });
            },
            data() {
                console.log(Chats.findOne(this.chatId));
                return Chats.findOne(this.chatId);
            }
        })
    }
}

ChatCtrl.$name = 'ChatCtrl';
ChatCtrl.$inject = ['$stateParams'];