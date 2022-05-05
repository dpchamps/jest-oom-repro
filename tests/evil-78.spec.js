
  describe("some-evil-spec=78", () => {
    it("evil-block-78", () => {
      window.evil_78 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  