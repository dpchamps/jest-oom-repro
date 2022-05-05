
  describe("some-evil-spec=956", () => {
    it("evil-block-956", () => {
      window.evil_956 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  