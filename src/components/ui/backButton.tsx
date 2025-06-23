"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  label?: string;
  className?: string;
}

export const BackButton = ({ label = "Back", className }: BackButtonProps) => {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className={className}
    >
      <ArrowLeftIcon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  );
};

