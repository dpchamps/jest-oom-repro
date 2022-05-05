
  describe("some-evil-spec=789", () => {
    it("evil-block-789", () => {
      window.evil_789 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  