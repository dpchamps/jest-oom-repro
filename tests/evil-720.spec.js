
  describe("some-evil-spec=720", () => {
    it("evil-block-720", () => {
      window.evil_720 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  