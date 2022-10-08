import Link from "next/link";
import Image from "next/image";
import ProsCard from "@/components/ProsCard";
import ConsCard from "@/components/ConsCard";
import Step from "@/components/Step";
import StepLarge from "@/components/StepLarge";
import StepLargeCustom from "@/components/StepLargeCustom";
import HighlightBox from "@/components/HighlightBox";
import StepCheck from "@/components/StepCheck";
import Divider from "@/components/Divider";
import VideoDemo from "@/components/VideoDemo";
import VideoComponent from "@/components/VideoComponent";
import Button from "@/components/Button";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  ConsCard,
  ProsCard,
  Step,
  StepLarge,
  StepCheck,
  VideoDemo,
  HighlightBox,
  Divider,
  // Table,
  StepLargeCustom,
  VideoComponent,
  Button,
};

export default MDXComponents;
