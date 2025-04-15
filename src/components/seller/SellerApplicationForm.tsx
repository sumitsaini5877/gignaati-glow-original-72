
import React from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  accountType: z.string().min(1, { message: "Please select an account type." }),
  companyName: z.string().optional(),
  websiteUrl: z.string().url({ message: "Please enter a valid URL." }).or(z.string().length(0)),
  aiExpertise: z.string().min(2, { message: "Please describe your AI expertise." }),
  gigDescription: z.string().min(10, { message: "Please tell us more about your AI gigs." }),
});

type FormValues = z.infer<typeof formSchema>;

const SellerApplicationForm = () => {
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      accountType: "",
      companyName: "",
      websiteUrl: "",
      aiExpertise: "",
      gigDescription: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: "Request submitted!",
      description: "We'll review your seller application and get back to you soon.",
    });
    navigate("/");
  };

  const handleAlreadyVerified = () => {
    navigate('/auth');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name*</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address*</FormLabel>
                <FormControl>
                  <Input placeholder="Your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="accountType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Type*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                    <SelectItem value="agency">Agency</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your company name (if applicable)" {...field} />
                </FormControl>
                <p className="text-sm text-muted-foreground">Required for agencies</p>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="websiteUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website or Portfolio URL</FormLabel>
              <FormControl>
                <Input placeholder="https://yourwebsite.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="aiExpertise"
          render={({ field }) => (
            <FormItem>
              <FormLabel>AI Expertise*</FormLabel>
              <FormControl>
                <Input 
                  placeholder="e.g., GPT Agents, LLM Fine-tuning, AI Automation" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gigDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell us about your AI gigs*</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Describe the AI gigs you'd like to showcase on Gignaati" 
                  className="min-h-[150px]"
                  {...field} 
                />
              </FormControl>
              <p className="text-sm text-muted-foreground">
                Include details about your experience, the types of AI gigs you offer, and why you'd be a good fit for our platform.
              </p>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
        >
          Submit Application
        </Button>
        
        {/* Button for already verified users */}
        <div className="text-center mt-4">
          <Button 
            type="button"
            variant="link"
            className="text-indigo-600 hover:text-indigo-800"
            onClick={handleAlreadyVerified}
          >
            Already verified? Click Here
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SellerApplicationForm;
