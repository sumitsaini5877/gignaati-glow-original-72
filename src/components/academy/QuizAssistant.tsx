
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareText } from "lucide-react";

const QuizAssistant = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI-Powered Quiz Assistant</CardTitle>
        <CardDescription>Get help with course material and test your knowledge</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-50 rounded-lg p-4 flex items-start space-x-4">
          <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
            <MessageSquareText className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-gray-700">
              Ask me anything about the courses you're taking. I can help explain concepts, 
              provide examples, or quiz you on what you've learned.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                Explain prompt chaining
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                Quiz me on fine-tuning
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                Example of few-shot prompting
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Type your question here..."
            className="w-full p-3 pr-12 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button 
            className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-md px-3 py-1 bg-blue-600 hover:bg-blue-700"
            size="sm"
          >
            Ask
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuizAssistant;
