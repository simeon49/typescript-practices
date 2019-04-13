// 导出变量
export const COMPANY_NAME = "Google";

// 导出接口
export interface IdentityValidate {
    isStaff(name: string): boolean;
}

// 导出类
export class ErpIndentityValidate implements IdentityValidate {
    isStaff(name: string): boolean {
        return true;
    }
}

/**
 * 使用导出语句
 */
// export { ErpIndentityValidate };
export { ErpIndentityValidate as GoogleIndentityValidate};
