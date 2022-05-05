
  describe("some-evil-spec=174", () => {
    it("evil-block-174", () => {
      window.evil_174 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  