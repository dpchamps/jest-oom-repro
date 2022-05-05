
  describe("some-evil-spec=524", () => {
    it("evil-block-524", () => {
      window.evil_524 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  