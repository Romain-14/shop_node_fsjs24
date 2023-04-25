export const shopView = (req, res) => {
    res.status(200).render("layout", {
        template: "shop",
        data: res.locals.datas,
    });
};

export const itemView = (req, res) => {  
    const datas = res.locals.datas;
    const [datasFiltered] = datas.filter(d => d.id === req.params.id);
    
    res.status(200).render("layout", {template: "product", data: datasFiltered });
}