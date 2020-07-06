import React from "react";
import classNames from "classnames";

interface BaseProps {
  classNames?: string;
  disabled?: boolean;
  btnType?: "primary" | "default" | "danger" | "link";
  size?: "lg" | "sm";
  children?: React.ReactNode;
  href?: string;
}

type NativeButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseProps & React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = NativeButtonProps & AnchorButtonProps;

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props;

  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    // 只有链接上需要加 disabled 的 class 样式，按钮通过 disabled 属性判断
    disabled: btnType === "link" && disabled,
  });

  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  btnType: "default", // 为了样式，由于 a 标签和 button 公用一个 btn 类，所以按钮的默认属性写在对应 btn-type 上
  disabled: false, // button 中用到了它作为属性，需要有默认值
};

export default Button;
