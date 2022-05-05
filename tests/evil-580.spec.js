
  describe("some-evil-spec=580", () => {
    it("evil-block-580", () => {
      window.evil_580 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  