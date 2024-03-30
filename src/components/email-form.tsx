import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useRef } from "react";

export function EmailForm() {
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();

    if (!formRef.current) return;

    // @ts-ignore
    const { first, last, email } = event.target;

    // TODO: Send the email
    console.log(first.value, last.value, email.value);
    formRef.current.reset();
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit} ref={formRef}>
      <div className="grid grid-cols-2 gap-4">
        <span className="flex flex-col gap-2">
          <Label>First Name</Label>
          <Input name="first" />
        </span>
        <span className="flex flex-col gap-2">
          <Label>Last Name</Label>
          <Input name="last" />
        </span>
      </div>
      <span className="flex flex-col gap-2">
        <Label>Email</Label>
        <Textarea name="email" className="h-48" />
      </span>
      <Button type="submit">Send</Button>
    </form>
  );
}
