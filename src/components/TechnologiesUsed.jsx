/* eslint-disable no-unused-vars */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import appDevImg from "../assets/App-Development-TSS.png";
import aiImg from "../assets/AI-TSS.jpg";
import { Link, useNavigate } from "react-router-dom";

function TechnologiesUsed() {
  const navigate = useNavigate();
  return (
    <div className="-mb-60">
      <div className="gap-5 grid grid-cols-12 grid-rows-2 px-8">
        <Card
          onClick={() => navigate("/web-dev")}
          isPressable
          isFooterBlurred
          className="col-span-12 sm:col-span-4 h-[300px] hover:opacity-75"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold"></p>
            <h4 className="text-white font-medium text-2xl">Web Development</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://nextui.org/images/card-example-4.jpeg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-white text-sm">
                High-quality web applications that drive engagement and deliver
                outstanding performance
              </p>
              <p className="text-black text-tiny"></p>
            </div>
            <Button
              onClick={() => navigate("/web-dev")}
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Learn
            </Button>
          </CardFooter>
        </Card>

        <Card
          onClick={() => navigate("/app-dev")}
          isPressable
          isFooterBlurred
          className="col-span-12 sm:col-span-4 h-[300px] hover:opacity-75"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold"></p>
            <h4 className="text-white font-medium text-2xl">App Development</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src={appDevImg}
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">
                Creative prowess with technical expertise to engineer apps that
                are intuitive, scalable, and purpose-built
              </p>
              <p className="text-black text-tiny"></p>
            </div>
            <Button
              onClick={() => navigate("/app-dev")}
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Learn
            </Button>
          </CardFooter>
        </Card>
        <Card
          onClick={() => navigate("/ai-ml")}
          isPressable
          isFooterBlurred
          className="col-span-12 sm:col-span-4 h-[300px] hover:opacity-75"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold"></p>
            <h4 className="text-white font-medium text-2xl">AI/ML</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src={aiImg}
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">
                Predictive analytics, natural language processing, computer
                vision, and more
              </p>
              <p className="text-black text-tiny"></p>
            </div>
            <Button
              onClick={() => navigate("/ai-ml")}
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Learn
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default TechnologiesUsed;
