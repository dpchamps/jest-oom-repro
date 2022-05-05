
  describe("some-evil-spec=841", () => {
    it("evil-block-841", () => {
      window.evil_841 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  