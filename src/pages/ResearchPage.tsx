export default function ResearchPage() {
  return (
    <div className="bg-[#EEF0EA] text-[#0B0E14] py-12 md:py-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Title */}
        <header className="space-y-4 border-b border-[#0B0E14]/15 pb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-[#0B0E14] tracking-tight">
            Research
          </h1>
          <p className="font-serif text-lg sm:text-xl text-[#4A5471] leading-relaxed">
            Deconstructing the principles of multicellular spatial organization and clonal ecology in solid tumors.
          </p>
        </header>

        {/* Section 1: Overview & Biological Principles */}
        <section className="space-y-6 font-serif text-base sm:text-lg text-[#0B0E14] leading-[1.8] text-justify">
          <p>
            Taking a set of distinct cell types, spatiotemporal combinatorial phenomena can presumedly lead to a vast number of multicellular spatial patterns. Still, only a relatively limited number of stable multicellular spatial patterns with functions (and dysfunctions) emerge from all possible coordination events amongst multiple cell types.
          </p>
          <p>
            For these patterns to repeatedly arise in distinct organisms, a set of principles driving the spatial organization of multiple cell types must be conserved; however, these principles remain largely unknown as we have only recently begun to understand how multicellular organization works.
          </p>
          <p>
            Being able to read, anticipate the outputs, and eventually control the principles behind the spatial organization of multiple cell types are some of the most fascinating problems of modern biotechnology. Advances in this area are key to manipulating tissue function and will bring numerous benefits to society: from a deeper understanding of the natural world to better cell-based therapies, diagnostic tools, and engineered tissues for precision and regenerative medicine.
          </p>
        </section>

        {/* Section 2: Cancer Clonal Heterogeneity & Group Goal */}
        <section className="space-y-6 font-serif text-base sm:text-lg text-[#0B0E14] leading-[1.8] text-justify">
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#0B0E14] tracking-tight pt-4">
            Clonal Behaviors in Solid Tumors
          </h2>
          <p>
            In the Spatial Biotechnology group, we are making headway on this problem via the in-depth study of clonal behaviors in solid tumors. The number of cancer patients is expected to increase significantly over the coming decades, making it imperative to improve and expedite cancer management.
          </p>
          <p>
            A common reason for the failure of current therapies in solid tumors is that they are highly heterogeneous entities, and a major source fueling this heterogeneity is clonal diversity, which encompasses genetic variability and epigenetically regulated cell states. Clonal diversity significantly influences tumor growth, metastasis, and therapy response.
          </p>
          <p>
            It is increasingly clear that the spatial organization of cancer cell clones is a crucial factor in solid tumor development, as cell fate is intimately linked to the local microenvironment. However, our understanding of the rules governing clonal spatial organization in tumors is limited, largely due to the historical absence of mature experimental and computational frameworks to investigate clonal behaviors in the native tissue context.
          </p>
          <p className="bg-[#E1E4DB] p-6 rounded-md border-l-4 border-[#0B0E14] font-sans font-medium text-base text-[#0B0E14] not-italic">
            The goal of the Spatial Biotechnology group is to develop high-throughput and spatial perturbation technologies to understand how cellular clones spatially organize to drive solid tumor development, with the long-term goal of designing better cancer therapies and tools to predict clinical outcomes.
          </p>
        </section>

        {/* MIBI Images Figure Section */}
        <section className="space-y-4 my-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#E1E4DB] p-4 rounded-md border border-[#0B0E14]/20 shadow-sm">
            <div className="flex flex-col items-center">
              <img
                src="/images/research/mibi1.png"
                alt="Histopathology-grade MIBI in human squamous cell carcinoma"
                className="w-full h-auto object-cover rounded bg-[#0B0E14]"
              />
              <span className="text-xs font-sans font-semibold text-[#4A5471] mt-2">
                (Left) Squamous Cell Carcinoma
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/research/mibi2.png"
                alt="Clonal tracing studies using MIBI in vivo"
                className="w-full h-auto object-cover rounded bg-[#0B0E14]"
              />
              <span className="text-xs font-sans font-semibold text-[#4A5471] mt-2">
                (Middle) In Vivo Clonal Tracing
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/research/mibi3.png"
                alt="Super-resolution multiplex imaging of cisplatin-treated TYK-nu nucleus"
                className="w-full h-auto object-cover rounded bg-[#0B0E14]"
              />
              <span className="text-xs font-sans font-semibold text-[#4A5471] mt-2">
                (Right) Super-Resolution Nucleus
              </span>
            </div>
          </div>
          <figcaption className="font-serif text-sm text-[#4A5471] leading-relaxed pt-1">
            <strong>Figure 1.</strong> Representative highly multiplex images in a variety of models analyzed by Multiplex Ion Beam Imaging (MIBI), a spatial proteomics technology that detects 40+ antibodies in tissue sections using isotopes. <em>(Left)</em> Histopathology-grade MIBI in a section of human squamous cell carcinoma. <em>(Middle)</em> Clonal tracing studies using MIBI in a tumor grown in vivo. <em>(Right)</em> Super-resolution multiplex imaging of the nucleus of a cisplatin-treated TYK-nu cell, an ovarian cancer cell line.
          </figcaption>
        </section>

        {/* Section 3: The 4 Core Questions in Prose */}
        <section className="space-y-12 pt-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#0B0E14] tracking-tight border-b border-[#0B0E14]/15 pb-4">
            Key Research Questions
          </h2>

          {/* Question 1 */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#0B0E14]">
              1. How is clonal cooperation established and maintained?
            </h3>
            <p className="font-serif text-base sm:text-lg text-[#0B0E14] leading-[1.8] text-justify">
              The widespread clonal heterogeneity of human tumors implies that several ecological interactions are in play, together with clonal competition. Indeed, recent evidence supports that tumor evolution could be also driven by clonal cooperation, where growth equilibrium of two or more clones might be a path to optimal fitness. Using genome editing tools, pooled screens, and super-resolution multiplexed imaging, we interrogate molecular signatures of tens of genetically engineered cancer cell clones in the native tissue context in <em>in vivo</em> murine models. This work aims to characterize molecular determinants promoting clonal cooperation in cancer, which would provide causal understanding on how genetically unique clones arrange within a tumor and regulate tumor growth.
            </p>
          </div>

          {/* Question 2 */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#0B0E14]">
              2. How does metabolite accessibility regulate the growth of neighbouring cancer cell clones?
            </h3>
            <p className="font-serif text-base sm:text-lg text-[#0B0E14] leading-[1.8] text-justify">
              Distinct environmental conditions simultaneously arise in multiple regions of a tumor providing selective pressure to the variable cancer cell population at place, further increasing heterogeneity or dramatically shifting the composition of the clonal pool. For instance, metabolic reprogramming of cancer cells can result in localized and differential enrichment of metabolites. Using automation strategies and highly multiplexed imaging, we characterize clonal cancer cell behaviors in hundreds of in vitro 3D tumors growing in metabolically defined environmental conditions. This work aims to identify clonal signatures in specific metabolic environments, which would provide clues on how the environment regulates clonal growth and potentially inform future therapeutic interventions.
            </p>
          </div>

          {/* Question 3 */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#0B0E14]">
              3. How do clonal populations and microenvironments evolve in primary tumors?
            </h3>
            <p className="font-serif text-base sm:text-lg text-[#0B0E14] leading-[1.8] text-justify">
              The tumor microenvironment, which includes resident immune and stromal cells as well as the extracellular matrix, is closely linked to the evolution of the cancer cell population. Using spatial transcriptomics and histopathology-grade proteomics, we correlate molecular features that are predictive of clonal growth in a variety of patient cohorts in collaboration with clinicians. This work aims to identify clonal patterns in clinical tumor samples, which would inform about spatial features correlating with clinical outcome for better disease management.
            </p>
          </div>

          {/* Question 4 */}
          <div className="space-y-3">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#0B0E14]">
              4. How could adoptive T-cell transfer therapies be improved for solid tumor treatment?
            </h3>
            <p className="font-serif text-base sm:text-lg text-[#0B0E14] leading-[1.8] text-justify">
              Some of the major obstacles to increase the success of adoptive T-cell transfer therapies for solid tumors is limited T-cell infiltration, persistence, and functionality. Using immune cell engineering approaches and highly multiplexed imaging, we track the tumor location of adoptive T-cell transfer therapies and assess their functional status in the native tissue environment of models permissive to T-cell infiltration. This work aims to identify molecular determinants of productive T-cell fitness, which would provide alternative options to improve current cell-based therapies for cancer.
            </p>
          </div>
        </section>

      </article>
    </div>
  );
}
