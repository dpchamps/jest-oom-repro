
  describe("some-evil-spec=966", () => {
    it("evil-block-966", () => {
      window.evil_966 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  