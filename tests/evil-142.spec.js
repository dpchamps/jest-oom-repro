
  describe("some-evil-spec=142", () => {
    it("evil-block-142", () => {
      window.evil_142 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  