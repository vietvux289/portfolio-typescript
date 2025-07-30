import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useMemo, useRef } from "react";

interface IAnimationLottie {
  animationPath: any;
  width?: string;
}

const AnimationLottie = ({
  animationPath,
  width = "95%",
}: IAnimationLottie) => {

  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animationPath,
      style: {
        width,
      },
      lottieRef: lottieRef,
    };
  }, [animationPath, width]);

  useEffect(() => {
    return () => {
      if (lottieRef && lottieRef.current) {
        lottieRef?.current.destroy();
      }
    };
  }, []);

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;