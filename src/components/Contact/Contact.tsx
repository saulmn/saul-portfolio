import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export function Contact() {
  return (
    <section
      className="font-semibold w-full flex items-center justify-center py-10"
      id="contact"
    >
      <Card className="max-w-3xl h-full">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Me</CardTitle>
          <CardDescription>
            I’m always open to interesting projects, new opportunities, or just
            talking tech. Whether you want to collaborate, hire, or say hi —
            drop me a message!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
          <Label className="w-full">Contact Name</Label>
          <Input placeholder="Your Name" />
          <Label className="w-full">Message</Label>
          <Textarea placeholder="Your message here!" />
          <Button className="w-full">Send email form here!</Button>
        </CardContent>
        <CardFooter>Thanks for visiting</CardFooter>
      </Card>
    </section>
  );
}
