
  describe("some-evil-spec=746", () => {
    it("evil-block-746", () => {
      window.evil_746 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  