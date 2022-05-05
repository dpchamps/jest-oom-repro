
  describe("some-evil-spec=521", () => {
    it("evil-block-521", () => {
      window.evil_521 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  