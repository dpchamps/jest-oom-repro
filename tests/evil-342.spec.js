
  describe("some-evil-spec=342", () => {
    it("evil-block-342", () => {
      window.evil_342 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  