
  describe("some-evil-spec=667", () => {
    it("evil-block-667", () => {
      window.evil_667 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  