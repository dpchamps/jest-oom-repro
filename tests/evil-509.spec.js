
  describe("some-evil-spec=509", () => {
    it("evil-block-509", () => {
      window.evil_509 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  