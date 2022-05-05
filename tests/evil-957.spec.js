
  describe("some-evil-spec=957", () => {
    it("evil-block-957", () => {
      window.evil_957 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  