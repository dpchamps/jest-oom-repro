
  describe("some-evil-spec=488", () => {
    it("evil-block-488", () => {
      window.evil_488 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  