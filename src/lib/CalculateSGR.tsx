export const calculateSGR = (formulaObject: any) =>{
    const Wt = formulaObject.fbw
    const W0 = formulaObject.ibw
    const t = formulaObject.t

    const LnWt = Math.log(Wt)
    const LnW0 = Math.log(W0)

    return ((LnWt - LnW0) / t) * 100
}