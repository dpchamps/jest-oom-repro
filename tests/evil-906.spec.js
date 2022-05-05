
  describe("some-evil-spec=906", () => {
    it("evil-block-906", () => {
      window.evil_906 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  