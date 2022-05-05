
  describe("some-evil-spec=603", () => {
    it("evil-block-603", () => {
      window.evil_603 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  