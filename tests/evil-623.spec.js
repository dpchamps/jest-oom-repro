
  describe("some-evil-spec=623", () => {
    it("evil-block-623", () => {
      window.evil_623 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  