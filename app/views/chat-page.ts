import { EventData, Observable, ObservableArray } from '@nativescript/core';
import { Message } from '../models/message.model';
import { HealthcareService } from '../services/healthcare.service';

export class ChatViewModel extends Observable {
    private messages: ObservableArray<Message>;
    private userInput: string;
    private healthcareService: HealthcareService;

    constructor() {
        super();
        this.messages = new ObservableArray<Message>();
        this.userInput = "";
        this.healthcareService = new HealthcareService();
        
        // Initial greeting
        this.addBotMessage("Hello! I'm your healthcare assistant. Please describe your symptoms, and I'll try to help you.");
    }

    onSendTap() {
        if (!this.userInput.trim()) return;

        // Add user message
        this.addUserMessage(this.userInput);
        
        // Get bot response
        const diagnosis = this.healthcareService.getDiagnosis(this.userInput);
        this.addBotMessage(diagnosis);
        
        // Clear input
        this.userInput = "";
        this.notifyPropertyChange('userInput', "");
    }

    private addUserMessage(text: string) {
        this.messages.push(new Message(text, true));
    }

    private addBotMessage(text: string) {
        this.messages.push(new Message(text, false));
    }
}

export function onNavigatingTo(args: EventData) {
    const page = args.object;
    page.bindingContext = new ChatViewModel();
}