
  describe("some-evil-spec=285", () => {
    it("evil-block-285", () => {
      window.evil_285 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  