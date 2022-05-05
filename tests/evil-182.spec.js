
  describe("some-evil-spec=182", () => {
    it("evil-block-182", () => {
      window.evil_182 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  