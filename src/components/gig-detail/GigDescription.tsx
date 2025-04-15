
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GigDescriptionProps {
  description: string;
}

const GigDescription = ({ description }: GigDescriptionProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Description</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{description}</p>
        <div className="mt-6 space-y-4">
          <div>
            <h4 className="font-semibold mb-2">What you'll get:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Custom trained GPT model based on your content</li>
              <li>Integration instructions and documentation</li>
              <li>Dedicated support during setup</li>
              <li>Performance optimization recommendations</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Use cases:</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Content generation for blogs and articles</li>
              <li>Social media post creation</li>
              <li>Product descriptions</li>
              <li>Email marketing copy</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GigDescription;
