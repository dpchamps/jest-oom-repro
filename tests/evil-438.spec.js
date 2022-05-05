
  describe("some-evil-spec=438", () => {
    it("evil-block-438", () => {
      window.evil_438 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  