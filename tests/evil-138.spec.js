
  describe("some-evil-spec=138", () => {
    it("evil-block-138", () => {
      window.evil_138 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  